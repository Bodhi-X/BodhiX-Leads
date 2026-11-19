import { Component, useEffect, useMemo, useRef, type ReactNode, type Ref } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei/core/RoundedBox";
import { Billboard } from "@react-three/drei/core/Billboard";
import { CanvasTexture, LinearFilter, LinearMipmapLinearFilter, SRGBColorSpace, type Group, type Mesh, type MeshBasicMaterial, type PerspectiveCamera } from "three";
import { type MotionValue } from "framer-motion";

type Props = { progress: MotionValue<number>; reduced: boolean; active?: number; quantity?: number; portrait?: boolean };
const clamp = (n: number) => Math.max(0, Math.min(1, n));
const segment = (p: number, start: number, end: number) => {
  const t = clamp((p - start) / (end - start));
  return t * t * (3 - 2 * t);
};
const transferStart = (i: number) => .5 + i * .012;
const transferEnd = (i: number) => .66 + i * .012;
export function getWorkflowState(progress: number, quantity = 12) {
  const p = clamp(progress);
  return {
    phase: p < .24 ? 0 : p < .5 ? 1 : p < .82 ? 2 : 3,
    assembled: Array.from({ length: Math.min(12, Math.max(0, quantity)) }, (_, i) => p >= transferEnd(i)).filter(Boolean).length,
    deployed: p >= .98,
    architectureReady: p >= .38,
    briefCaptured: p >= .16,
  };
}

function Label({ lines, width = 2.7, height = .76, color = "#f4f0ea", background = "", size = 64 }: {
  lines: string[]; width?: number; height?: number; color?: string; background?: string; size?: number;
}) {
  const gl = useThree(state => state.gl);
  const anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy());
  const key = lines.join("\n");
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024; canvas.height = Math.round(1024 * height / width);
    const ctx = canvas.getContext("2d")!;
    if (background) { ctx.fillStyle = background; ctx.fillRect(0, 0, canvas.width, canvas.height); }
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    const lineHeight = size * 1.25;
    lines.forEach((line, i) => {
      ctx.font = `${i === 0 ? 600 : 400} ${i === 0 ? size : size * .75}px Arial, sans-serif`;
      ctx.fillStyle = color;
      ctx.fillText(line, 512, canvas.height / 2 + (i - (lines.length - 1) / 2) * lineHeight, 980);
    });
    const map = new CanvasTexture(canvas); map.colorSpace = SRGBColorSpace;
    map.anisotropy = anisotropy;
    map.minFilter = LinearMipmapLinearFilter; map.magFilter = LinearFilter;
    return map;
  }, [key, width, height, color, background, size, anisotropy]);
  useEffect(() => () => texture.dispose(), [texture]);
  return <mesh><planeGeometry args={[width, height]} /><meshBasicMaterial map={texture} transparent={!background} depthWrite={false} toneMapped={false} /></mesh>;
}

function Block({ position = [0, 0, 0], args, color = "#1e293b", radius = .04, metal = .15 }: {
  position?: [number, number, number]; args: [number, number, number]; color?: string; radius?: number; metal?: number;
}) {
  return <RoundedBox args={args} position={position} radius={radius} smoothness={3} castShadow receiveShadow>
    <meshStandardMaterial color={color} metalness={metal} roughness={.48} />
  </RoundedBox>;
}

/** The tiny interfaces are real, locally drawn product surfaces, not screenshots. */
function SoftwareSurface({ kind, width, height, materialRef }: { kind: "architecture" | "dashboard"; width: number; height: number; materialRef?: Ref<MeshBasicMaterial> }) {
  const gl = useThree(state => state.gl);
  const anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy());
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    const logicalHeight = kind === "architecture" ? 640 : 1200;
    canvas.width = 2048; canvas.height = logicalHeight * 2;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(2, 2);
    /* Draw in logical coordinates, rasterize at twice the resolution. */

    const text = (value: string, x: number, y: number, size = 30, color = "#f4f0ea") => {
      ctx.fillStyle = color; ctx.font = `500 ${size}px Arial, sans-serif`; ctx.fillText(value, x, y);
    };
    const rect = (x: number, y: number, w: number, h: number, fill: string) => {
      ctx.fillStyle = fill; ctx.fillRect(x, y, w, h);
    };
    rect(0, 0, 1024, logicalHeight, "#0f172a");
    if (kind === "architecture") {
      text("FIELD SUPPLY / ARCHITECTURE", 48, 65, 33, "#f8d5c4");
      const nodes = [{ x: 55, name: "ERP" }, { x: 365, name: "CRM" }, { x: 675, name: "COMMERCE" }];
      ctx.strokeStyle = "#c45c35"; ctx.lineWidth = 8;
      nodes.forEach(({ x, name }) => {
        rect(x, 120, 290, 100, "#263247"); text(name, x + 30, 182, 36);
        ctx.beginPath(); ctx.moveTo(x + 145, 220); ctx.lineTo(x + 145, 270); ctx.lineTo(510, 270); ctx.stroke();
      });
      ctx.beginPath(); ctx.moveTo(510, 270); ctx.lineTo(510, 315); ctx.stroke();
      rect(260, 315, 500, 105, "#c45c35"); text("API / AUTH / WORKFLOWS", 297, 380, 31);
      ctx.beginPath(); ctx.moveTo(510, 420); ctx.lineTo(510, 465); ctx.stroke();
      rect(260, 465, 500, 105, "#263247"); text("SHARED CUSTOMER DATA", 295, 530, 30);
    } else {
      rect(0, 0, 1024, 110, "#1e293b"); text("FIELD SUPPLY", 35, 68, 38);
      rect(831, 36, 16, 16, "#f8d5c4"); text("LIVE", 865, 58, 26, "#f8d5c4");
      rect(0, 110, 210, 1090, "#151f32");
      ["Overview", "Customers", "Pipeline", "Orders", "Products", "Reports"].forEach((label, i) => {
        if (i === 0) rect(15, 153 + i * 74, 180, 56, "#9a3412");
        text(label, 31, 191 + i * 74, 24, i === 0 ? "#f4f0ea" : "#b8c1d2");
      });
      text("Business overview", 248, 186, 37); text("ERP + CRM + Commerce", 249, 226, 24, "#f8d5c4");
      ["Revenue", "Open leads", "Orders"].forEach((label, i) => {
        rect(248 + i * 249, 267, 225, 145, "#1e293b");
        text(label, 267 + i * 249, 307, 23, "#c2cadd");
        text(["144,000", "24", "128"][i], 267 + i * 249, 367, 39);
      });
      rect(248, 448, 723, 300, "#1e293b"); text("Sales performance", 277, 494, 27);
      [70, 110, 96, 145, 130, 177, 194, 212, 199, 226].forEach((h, i) => rect(280 + i * 65, 710 - h * .7, 38, h * .7, i > 6 ? "#f8d5c4" : "#c45c35"));
      text("Recent orders", 253, 811, 29);
      ["Order", "Customer", "Status"].forEach((label, i) => text(label, [253, 435, 785][i], 866, 23, "#aebacf"));
      ["Alex Morgan", "Jordan Lee", "Sam Rivera"].forEach((name, i) => {
        rect(248, 887 + i * 80, 723, 1, "#344056");
        text(`FS-${2048 + i}`, 253, 934 + i * 80, 24); text(name, 435, 934 + i * 80, 24);
        text("Synced", 785, 934 + i * 80, 23, "#f8d5c4");
      });
    }
    const map = new CanvasTexture(canvas); map.colorSpace = SRGBColorSpace;
    map.anisotropy = anisotropy;
    map.minFilter = LinearMipmapLinearFilter; map.magFilter = LinearFilter;
    return map;
  }, [kind, anisotropy]);
  useEffect(() => () => texture.dispose(), [texture]);
  return <mesh><planeGeometry args={[width, height]} /><meshBasicMaterial ref={materialRef} map={texture} toneMapped={false} transparent={kind === "dashboard"} opacity={kind === "dashboard" ? 0 : 1} /></mesh>;
}

function Operation({ progress, quantity = 12, portrait = false }: Props) {
  const packet = useRef<Group>(null);
  const lead = useRef<Group>(null);
  const order = useRef<Group>(null);
  const stock = useRef<(Group | null)[]>([]);
  const walls = useRef<Group>(null);
  const leftLid = useRef<Group>(null);
  const rightLid = useRef<Group>(null);
  const complete = useRef<Group>(null);
  const displayHinge = useRef<Group>(null);
  const screenMaterial = useRef<MeshBasicMaterial>(null);
  const activeIndicators = useRef<(Mesh | null)[]>([]);
  const xStations = [-5, -1.7, 1.9, 5.2];
  const zStations = [-6, -2, 2, 6];
  useFrame(() => {
    const p = clamp(progress.get());
    const state = getWorkflowState(p, quantity);
    if (packet.current) {
      let x = -6.25 + segment(p, 0, .16) * 1.25;
      x += segment(p, .19, .38) * 3.3;
      x += segment(p, .4, .5) * 3.6;
      x += segment(p, .8, .9) * 3.3;
      if (portrait) {
        const z = -7.25 + segment(p,0,.16)*1.25 + segment(p,.19,.38)*4 + segment(p,.4,.5)*4 + segment(p,.8,.9)*4;
        packet.current.position.set(-1.7,.29,z);
      } else packet.current.position.set(x, .29, 1.39);
      packet.current.scale.setScalar(1 - segment(p, .91, .98));
    }
    if (lead.current) { lead.current.position.y = .45 + segment(p, .02, .16) * .58; }
    if (order.current) {
      const t = segment(p, .24, .38);
      order.current.position.y = .24 + t * .92;
      order.current.scale.y = .05 + t * .95;
    }
    stock.current.forEach((cube, i) => {
      if (!cube) return;
      const t = i < quantity ? segment(p, transferStart(i), transferEnd(i)) : 0;
      const col = i % 3, row = Math.floor(i / 3);
      cube.position.set(portrait ? (col-1)*.48 : 1.9+(col-1)*.48+t*3.3,
        .53+Math.sin(t*Math.PI)*(1.35+row*.12),
        (row-1.5)*.48 + (portrait ? 2+t*4 : 0));
    });
    const wallRise = segment(p, .805, .9);
    if (walls.current) walls.current.scale.y = .025 + wallRise * .975;
    [leftLid.current, rightLid.current].forEach((lid, i) => {
      if (!lid) return;
      lid.position.y = .34 + wallRise * .72;
      lid.scale.setScalar(Math.max(.001, wallRise));
      // Slide below the display rather than sweeping a hinged cover through it.
      const remainingTravel = 1 - segment(p, .9, .96);
      lid.position.x = (i === 0 ? 4.3 : 6.1) + (i === 0 ? -.7 : .7) * remainingTravel;
      lid.rotation.z = 0;
    });
    // Keep the display physically attached throughout assembly, then hinge
    // it open and power up the interface as the surrounding panels settle.
    if (displayHinge.current) {
      displayHinge.current.position.y = .43 + wallRise * .76;
      displayHinge.current.rotation.x = -Math.PI / 2 + segment(p, .96, 1) * (Math.PI / 2 - 1.13);
    }
    if (screenMaterial.current) screenMaterial.current.opacity = segment(p, .96, .995);
    if (complete.current) {
      const ready = segment(p, .98, 1);
      complete.current.visible = ready > 0;
      complete.current.scale.setScalar(ready);
    }
    activeIndicators.current.forEach((indicator, i) => {
      if (indicator) indicator.scale.x = i === state.phase ? 1 : .15;
    });
  });
  return <>
    <Block args={portrait ? [4.3,.18,16.8] : [14.2,.18,4.3]} position={[0, -.2, 0]} radius={.08} color="#111a2a" metal={.4} />
    <Block args={portrait ? [4.14,.025,16.65] : [14.05,.025,4.14]} position={[0, -.095, 0]} radius={.01} color="#263247" metal={.55} />
    <Block args={portrait ? [4.04,.025,16.55] : [13.96,.025,4.04]} position={[0, -.075, 0]} radius={.01} color="#101827" />
    <Block args={portrait ? [.24,.1,15.5] : [12.5,.1,.24]} position={portrait ? [-1.7,.08,0] : [-.3,.08,1.39]} radius={.04} color="#475168" metal={.65} />
    <Block args={portrait ? [.075,.028,15.4] : [12.4,.028,.075]} position={portrait ? [-1.7,.146,0] : [-.3,.146,1.39]} radius={.01} color="#9a3412" />
    {xStations.map((x, i) => <group key={x} position={portrait ? [0,0,zStations[i]] : [x,0,0]}>
      <Block args={[2.65, .18, 2.25]} position={[0, .04, -.15]} radius={.08} color="#1e293b" />
      <Block args={portrait ? [.65,.09,.07] : [.07,.09,.65]} position={portrait ? [-1.3,.1,0] : [0,.1,1.04]} color="#c45c35" radius={.01} />
      {!portrait && <><Billboard position={[0, 2.7, -.15]}><Label lines={[["Brief", "Architecture", "Build", "Deploy"][i]]} width={2.75} height={.45} size={116} /></Billboard>
      <Billboard position={[0, 2.28, -.15]}><Label lines={[["Field Supply", "UI / API / Data", `${quantity} connected modules`, "One connected application"][i]]} width={2.75} height={.36} size={70} color="#f8d5c4" /></Billboard></>}
      <mesh ref={node => { activeIndicators.current[i] = node; }} position={[0, -.054, 1.93]}><boxGeometry args={[1.6, .018, .04]} /><meshBasicMaterial color="#f8d5c4" /></mesh>
    </group>)}

    {/* Shared sculptural parts, placed along the portrait platform on phones. */}
    <group position={portrait ? [5,0,-6] : [0,0,0]}>
    <Block args={[1.85, .38, 1.2]} position={[-5, .32, -.15]} color="#27364d" radius={.1} />
    <Block args={[1.42, .045, .12]} position={[-5, .53, .03]} color="#050505" radius={.01} />
    <group ref={lead} position={[-5, .45, -.15]}>
      <Block args={[1.38, .93, .08]} color="#f8d5c4" radius={.035} />
      <group position={[0, .02, .047]}><Label lines={["Field Supply", "Client brief", "ERP / CRM / Commerce"]} width={1.26} height={.78} size={119} color="#162136" /></group>
    </group>
    <Block args={[1.66, .055, .25]} position={[-5, .56, .43]} color="#c45c35" radius={.02} />

    </group>
    <group position={portrait ? [1.7,0,-2] : [0,0,0]}>
    <Block args={[2.1, .3, 1.5]} position={[-1.7, .26, -.1]} color="#27364d" />
    {[0, 1, 2].map(i => <Block key={i} args={[1.72, .045, 1.14]} position={[-1.7, .44 + i * .055, -.1]} color={i === 2 ? "#52617b" : "#344056"} radius={.025} />)}
    <group ref={order} position={[-1.7, .24, -.1]}>
      <Block args={[1.76, 1.12, .085]} color="#52617b" radius={.03} />
      <group position={[0, 0, .049]}><SoftwareSurface kind="architecture" width={1.62} height={.99} /></group>
    </group>

    </group>
    {/* Modules travel above the platform, retaining their physical volume. */}
    <Block args={[1.85, .14, 2.08]} position={portrait ? [0,.25,2] : [1.9,.25,0]} color="#3c4c64" radius={.04} />
    {Array.from({ length: 12 }, (_, i) => <group key={i} ref={node => { stock.current[i] = node; }} position={[(portrait ? 0 : 1.9)+(i%3-1)*.48,.53,(Math.floor(i/3)-1.5)*.48+(portrait?2:0)]}>
      <Block args={[.38, .24, .38]} color={i % 3 === 0 ? "#9a3412" : "#263247"} radius={.025} metal={.5} />
      <group position={[0, .128, 0]} rotation={[-Math.PI / 2, 0, 0]}><Label lines={[["AUTH", "API", "UI", "DB", "CRM", "ERP", "SHOP", "PAY", "MAIL", "SEARCH", "JOBS", "AUDIT"][i]]} width={.34} height={.3} size={210} color="#f8d5c4" background="#162136" /></group>
      <group position={[0, 0, .197]}><Label lines={[["AUTH", "API", "UI", "DB", "CRM", "ERP", "SHOP", "PAY", "MAIL", "SEARCH", "JOBS", "AUDIT"][i]]} width={.34} height={.16} size={210} color="#f8d5c4" /></group>
      {[-1, 1].map(side => <Block key={side} args={[.025, .025, .28]} position={[side * .205, -.055, 0]} color="#a7a7b2" radius={.003} metal={.8} />)}
    </group>)}
    {[0, 1, 2, 3].map(row => <Block key={row} args={[1.56, .012, .012]} position={[portrait ? 0 : 1.9,.328,(row-1.5)*.48+(portrait?2:0)]} color="#8995a5" radius={.002} />)}

    <group position={portrait ? [-5.2,0,6] : [0,0,0]}>
    <Block args={[1.88, .1, 2.18]} position={[5.2, .29, 0]} color="#344056" radius={.025} metal={.65} />
    <group ref={walls} position={[5.2, .34, 0]}>
      <Block args={[.07, .7, 2.18]} position={[-.905, .35, 0]} color="#263247" radius={.012} metal={.6} />
      <Block args={[.07, .7, 2.18]} position={[.905, .35, 0]} color="#263247" radius={.012} metal={.6} />
      <Block args={[1.8, .7, .07]} position={[0, .35, -1.055]} color="#1e293b" radius={.012} metal={.6} />
      <Block args={[1.8, .7, .07]} position={[0, .35, 1.055]} color="#1e293b" radius={.012} metal={.6} />
      {[0, 1, 2, 3, 4].map(i => <Block key={i} args={[.17, .035, .012]} position={[-.58 + i * .23, .17, 1.095]} color="#56647c" radius={.004} />)}
    </group>
    <group ref={leftLid} position={[3.6, .34, 0]}>
      <Block args={[.9, .055, 2.18]} position={[.45, 0, 0]} color="#344056" radius={.012} metal={.65} />
    </group>
    <group ref={rightLid} position={[6.8, .34, 0]}>
      <Block args={[.9, .055, 2.18]} position={[-.45, 0, 0]} color="#344056" radius={.012} metal={.65} />
    </group>
    <group ref={displayHinge} position={[5.2, .43, .945]} rotation={[-Math.PI / 2, 0, 0]}>
      <group position={[0, 1.045, 0]}>
        <Block args={[1.8, 2.09, .06]} color="#52617b" radius={.035} metal={.6} />
        <group position={[0, 0, .035]}><SoftwareSurface kind="dashboard" width={1.67} height={1.97} materialRef={screenMaterial} /></group>
      </group>
    </group>
    <group ref={complete} visible={false} position={[5.2, 1.48, 0]}>
      <mesh position={[.69, -.725, 1.097]}><sphereGeometry args={[.035, 12, 8]} /><meshStandardMaterial color="#f8d5c4" emissive="#c45c35" emissiveIntensity={1} /></mesh>
      <group position={[0, -.845, 1.1]}><Label lines={["FIELD SUPPLY / LIVE"]} width={1.45} height={.19} size={112} color="#f8d5c4" /></group>
    </group>
    </group>
    <group ref={packet} position={portrait ? [-1.7,.29,-7.25] : [-6.25,.29,1.39]}>
      <Block args={[.45, .2, .37]} color="#f8d5c4" radius={.04} />
      <Block args={[.08, .012, .29]} position={[0, .106, 0]} color="#c45c35" radius={.002} />
    </group>
  </>;
}

function frameCamera(camera: PerspectiveCamera, width: number, height: number, mobile = width <= 760, progress = 0) {
  const tangent = Math.tan(camera.fov * Math.PI / 360);
  const distance = mobile
    ? Math.max(2 / tangent, 1.95 / (tangent * width / height)) + .65
    : Math.max(2.4 / tangent, 8 / (tangent * width / height)) + 2;
  // Hold each station in focus; scrolling moves along the vertical platform.
  const focusZ = mobile ? -6 + segment(progress,.20,.30)*4 + segment(progress,.44,.54)*4 + segment(progress,.57,.79)*2 + segment(progress,.79,.87)*2 : 0;
  camera.position.set(mobile ? distance*.09 : .3, mobile ? .65+distance*.78 : .75+distance*.43, mobile ? focusZ+distance*.625 : distance*.903);
  camera.lookAt(0, mobile ? .65 : .75, focusZ);
  camera.updateProjectionMatrix();
}

function Scene(props: Props) {
  const { camera, size, invalidate } = useThree();
  const vertical = window.matchMedia("(max-width:760px)").matches;
  useEffect(() => {
    frameCamera(camera as PerspectiveCamera, size.width, size.height, vertical, props.progress.get());
    invalidate();
  }, [camera, size.width, size.height, invalidate, props.progress, vertical]);
  useFrame(() => { if(vertical) frameCamera(camera as PerspectiveCamera,size.width,size.height,true,props.progress.get()); });
  useEffect(() => props.progress.on("change", () => invalidate()), [props.progress, invalidate]);
  return <>
    <ambientLight intensity={.65} />
    <directionalLight key={vertical ? "portrait-light" : "landscape-light"} position={[-4, 9, 6]} intensity={3.2} color="#fff2e5" castShadow shadow-mapSize={[1024, 1024]} shadow-camera-left={-9} shadow-camera-right={9} shadow-camera-top={vertical ? 11 : 5} shadow-camera-bottom={vertical ? -11 : -5} shadow-normalBias={.025} />
    <directionalLight position={[7, 4, -3]} intensity={2} color="#f8d5c4" />
    <directionalLight position={[-7, 2, -5]} intensity={1.4} color="#8294b7" />
    <Operation {...props} portrait={vertical}/>
    <mesh rotation={[-Math.PI/2,0,0]} position={[0,-.31,0]} receiveShadow><planeGeometry args={[200, 200]} /><shadowMaterial transparent opacity={.3} /></mesh>
  </>;
}
class SceneBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}
export default function Console3D(props: Props) {
  const fallback = <div className="bx3-fallback"><p>The 3D preview is unavailable in this browser. The workflow below follows the same client brief, software architecture, module integration and application deployment.</p></div>;
  return <SceneBoundary fallback={fallback}><Canvas shadows frameloop="demand" dpr={[1, 2]} camera={{ fov: 35, near: .1, far: 100, position: [0, 10, 20] }} gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }} fallback={fallback}><Scene {...props} /></Canvas></SceneBoundary>;
}
