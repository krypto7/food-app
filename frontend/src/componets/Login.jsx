import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex max-w-md flex-col gap-4 w-full">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            required
            placeholder="••••••"
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm">
            don't have account?{" "}
            <Link className="text-blue-600" to={"/register"}>
              register here
            </Link>
          </p>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
export default Login;
