import styled from "@emotion/styled";

import { TbFaceIdError } from "react-icons/tb";
import { toast } from "react-toastify";

const ErrorPokemon = styled.div`
  color: ${(props) => props.theme.colors.accent};
`;

export const ErrorInfo = ({ errMess }) => {
  const notify = () => toast(errMess);
  notify();
  return (
    <ErrorPokemon role="alert">
      <TbFaceIdError size="15em" color="red" />
      <p> {errMess}</p>
    </ErrorPokemon>
  );
};
