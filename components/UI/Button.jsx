export default function Button({ children }) {
  return (
    <button className="button">
      {" "}
      {children}
      <div className="hoverEffect">
        <div> </div>
      </div>
    </button>
  );
}
