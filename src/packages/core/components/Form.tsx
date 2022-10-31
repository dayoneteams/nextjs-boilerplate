export const Form = ({children, handleSubmit}) => {
  return <form onSubmit={handleSubmit}>{children}</form>;
};
