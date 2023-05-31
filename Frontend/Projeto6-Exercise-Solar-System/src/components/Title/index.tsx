type Tipagem = {
  headline: string;
};

function Title({ headline }: Tipagem) {
  return (
    <h2>{ headline }</h2>
  );
}

export default Title;
