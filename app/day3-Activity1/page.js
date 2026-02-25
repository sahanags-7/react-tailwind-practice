// 'use client';
// import { useState } from 'react';

// export default function Page() {
//   const [role, setRole] = useState("Medic");
//   const [power, setPower] = useState(50);
//   const [countdown, setCountdown] = useState(null);
//   const [destroyed, setDestroyed] = useState(false);
//   useEffect(() => {
//     if (countdown === null) return;

//     if (countdown === 0) {
//       setDestroyed(true);
//       return;
//     }

//     const timer = setTimeout(() => {
//       setCountdown(countdown - 1);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [countdown]);
//   return (
//     <div>
//       <p><button onClick={() => setRole("Medic")}>
//         Medic
//       </button></p>

//       <p><button onClick={() => setRole("Warrior")}>
//         Warrior
//       </button></p>

//       <p><button onClick={() => setRole("Artist")}>
//         Artist
//       </button></p>
//       <p>Power: {power}<button onClick={() => setPower(power + 10)}>
// Charge
// </button></p>
//       <p><button onClick={() => setPower(power - 10)}>
// Drain
// </button></p>

//  <RobotDisplay  role={role} power={power}/>
//     </div>
//   );
// }

// export function RobotDisplay({ role, power }) {
// let bgColor;
// let icon;
// let warning = "";
// if (role === "Medic") {
//   bgColor = "green";
//   icon = "💊";
// }
// else if (role === "Warrior") {
//   bgColor = "crimson";
//   icon = "⚔️";
// }
// else if (role === "Artist") {
//   bgColor = "purple";
//   icon = "🎨";
// }
// return (
//     <div
//       style={{
//         backgroundColor: bgColor,
//         padding: "20px",
//         color: "white",
//         borderRadius: "10px",
//         width: "200px",
//         textAlign: "center"
//       }}
//     >
//       <h1>{icon}</h1>
//       <h3>Role: {role}</h3>
//       <p>Power: {power}</p>
//     </div>
//   )
// }



'use client';
import { useState, useEffect } from 'react';

export default function Page() {
  const [role, setRole] = useState("Medic");
  const [power, setPower] = useState(50);


  const [countdown, setCountdown] = useState(null);
  const [destroyed, setDestroyed] = useState(false);


  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      setDestroyed(true);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div style={{ padding: "20px" }}>

      <h2>Select Role</h2>

      <button onClick={() => setRole("Medic")}>Medic</button>
      <button onClick={() => setRole("Warrior")} style={{ marginLeft: 10 }}>
        Warrior
      </button>
      <button onClick={() => setRole("Artist")} style={{ marginLeft: 10 }}>
        Artist
      </button>


      <h2 style={{ marginTop: 20 }}>Power Controls</h2>

      <p>Power: {power}</p>

      <button onClick={() => setPower(Math.min(power + 10, 100))}>
        Charge
      </button>

      <button
        onClick={() => setPower(Math.max(power - 10, 0))}
        style={{ marginLeft: 10 }}
      >
        Drain
      </button>


      <h2 style={{ marginTop: 20 }}>Danger Zone</h2>

      <button
        onClick={() => setCountdown(5)}
        disabled={countdown !== null || destroyed}
      >
        Self-Destruct
      </button>

      {countdown !== null && countdown > 0 && (
        <p>Self-destruct in: {countdown}</p>
      )}


      <div style={{ marginTop: 30 }}>
        {destroyed ? (
          <h1>💥</h1>
        ) : (
          <RobotDisplay role={role} power={power} />
        )}
      </div>

    </div>
  );
}



function RobotDisplay({ role, power }) {

  let bgColor;
  let icon;
  let warning = "";


  if (role === "Medic") {
    bgColor = "green";
    icon = "💊";
  }
  else if (role === "Warrior") {
    bgColor = "crimson";
    icon = "⚔️";
  }
  else if (role === "Artist") {
    bgColor = "purple";
    icon = "🎨";
  }


  if (power < 20) {
    icon = "⚠️";
    warning = "CRITICAL";
  }

  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: 20,
        color: "white",
        borderRadius: 10,
        width: 220,
        textAlign: "center"
      }}
    >
      <h1>{icon}</h1>
      <h3>Role: {role}</h3>
      <p>Power: {power}</p>

      {power < 20 && (
        <p style={{ color: "yellow", fontWeight: "bold" }}>
          CRITICAL
        </p>
      )}

    </div>
  );
}

