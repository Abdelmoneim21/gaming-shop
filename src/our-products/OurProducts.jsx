function OurProducts() {
  return (
    <div className="our-products mt-[10%] mb-[10%]">
      <div className="top mb-[6%]">
        <h1 className="text-[#f00] text-xl text-center font-semibold">
          Our Products
        </h1>
        <h1 className="tex-[#0e2c6c] text-3xl font-bold text-center mt-[20px]">
          Collection list
        </h1>
      </div>
      <div className="categories flex justify-center gap-5 w-[85%] m-auto ">
        <div className="category hover:scale-[104%] transition-all duration-300">
          <img
            src="/3_copy.webp"
            alt="3+"
            className="rounded-t-xl 
"
          />
          <div className="txt text-center py-3 bg-[#f6f7fa]">
            <h2 className="font-bold text-lg text-[#0e2c6c]">+3 Years</h2>
            <p className="text-[#aaa]">36 items</p>
          </div>
        </div>
        <div className="category hover:scale-[104%] transition-all duration-300">
          <img
            src="/0-1_copy.webp"
            alt="3+"
            className="rounded-t-xl 
"
          />
          <div className="txt text-center py-3 bg-[#f6f7fa]">
            <h2 className="font-bold text-lg text-[#0e2c6c]">0-1 Years</h2>
            <p className="text-[#aaa]">29 items</p>
          </div>
        </div>
        <div className="category hover:scale-[104%] transition-all duration-300">
          <img
            src="/2-3_copy.webp"
            alt="3+"
            className="rounded-t-xl 
"
          />
          <div className="txt text-center py-3 bg-[#f6f7fa]">
            <h2 className="font-bold text-lg text-[#0e2c6c]">1-3 Years</h2>
            <p className="text-[#aaa]">36 items</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
