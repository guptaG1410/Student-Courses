const AuthLayout = ({ children }: { childern: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
};

export default AuthLayout;
