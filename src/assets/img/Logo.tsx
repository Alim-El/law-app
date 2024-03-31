export const Logo = ({ mode = "black" }: { mode?: "white" | "black" }) => (
  <svg
    width="800"
    height="214"
    viewBox="0 0 780 214"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.3"
      d="M34.9199 31.1399L68.7599 31.1399L102.24 31.1399L136.08 31.1399L136.08 47.9999L171 47.9999L171 -6.10352e-05L-0.000117874 -7.59845e-05L-0.00012207 47.9999L34.9199 47.9999L34.9199 31.1399Z"
      fill={mode === "black" ? "black" : "#99B6C5"}
    />
    <path
      d="M136.08 157.86H102.24V63.0001H68.76V157.86H34.92V63.0001H0V189H171V63.0001H136.08V157.86Z"
      fill="#0094E8"
    />
    <text
      style={{
        fill: mode === "black" ? "black" : "#99B6C5",
        fontFamily: "Jost",
        fontSize: 18,
        fontWeight: 800,
        whiteSpace: "pre",
      }}
      transform="matrix(6.048763, 0, 0, 6.048763, -1104.406738, -503.862213)"
    >
      <tspan x="220.43" y="96.259">
        Закон
      </tspan>
      <tspan x="220.43" dy="1em">
        ​
      </tspan>
      <tspan>и человек</tspan>
    </text>
  </svg>
);
