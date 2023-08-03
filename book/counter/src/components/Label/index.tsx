import styled from "@emotion/styled";

const Container = styled.span({
  margin: "0 16px",
  fontSize: "1.2rem",
});

interface Props {
  readonly data: string;
}

export const Label = ({ data }: Props) => {
  return <Container>{data}</Container>;
};
