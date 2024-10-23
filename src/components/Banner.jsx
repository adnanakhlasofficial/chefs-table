const Banner = () => {
  return (
    <div className="bg-banner_bg rounded-xl py-32 px-48 flex justify-center items-center gap-10 flex-col">

      <div className="text-white space-y-6">
        <h1 className="heading">Discover an exceptional cooking <br /> class tailored for you!</h1>
        <p className="desc">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding <br /> problems to become an exceptionally
          well world-class Programmer.
        </p>
      </div>

      <div className="space-x-6">
        <button className="btn btn-primary font-semibold">Explore Now</button>
        <button className="btn btn-transparent font-semibold">Explore Now</button>
      </div>

    </div>
  );
};

export default Banner;
