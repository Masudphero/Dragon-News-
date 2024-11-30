

const Login = () => {
    return (
        <div className=" hero bg-base-200 min-h-screen *:bg-blue-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
         
          <div className=" bg-base-100 w-96 max-w-sm shrink-0 shadow-2xl">
            <h2 className="text-blue-500 font-bold text-center items-center mt-10 text-3xl">Login</h2>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;