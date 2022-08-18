// import { ImSpinner } from "react-icons/im";
import { FaSpinner } from "react-icons/fa";

export const PokemonPendingView = ({ pokemonName }) => {
  return (
    <div role="alert">
      <div>
        <FaSpinner size="32" className="icon-spin" />
        ...
      </div>
    </div>
  );
};
