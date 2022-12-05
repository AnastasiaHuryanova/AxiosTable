import "./loaderstyle.css";

export const Loader = ({ showing }) => {
  return (
    <div>
      {showing ? (
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : null}
    </div>
  );
};
