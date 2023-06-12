
const ErrorBox = ({ error }) => {
    return (
        <div className="w-5/6 my-5 bg-red-500/30 border rounded-md h-20"><p className=" text-center mt-5">{error}</p> </div>
    );
};

export default ErrorBox;