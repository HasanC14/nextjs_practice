"use client";

const Button = () => {
  const btnHandle = () => {
    console.log("hello there");
  };

  return (
    <div
      className="btn cursor-pointer bg-green-500 px-4 py-2 rounded-md w-32 text-center my-10"
      onClick={btnHandle}
    >
      Click
    </div>
  );
};

export default Button;
