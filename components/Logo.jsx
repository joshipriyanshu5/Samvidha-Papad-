export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="52"
        height="52"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="#F59E0B"
          stroke="#92400E"
          strokeWidth="4"
        />

        <circle
          cx="50"
          cy="50"
          r="32"
          fill="none"
          stroke="#FFF8DC"
          strokeDasharray="4 6"
          strokeWidth="3"
        />

        <text
          x="50"
          y="60"
          textAnchor="middle"
          fontSize="34"
          fontWeight="bold"
          fill="#1E3A8A"
        >
          S
        </text>
      </svg>

      <div>
        <h2 className="text-xl font-bold text-orange-700">
          Samvidha
        </h2>

        <p className="text-sm text-gray-600">
          Papad
        </p>
      </div>
    </div>
  );
}
