import React, { memo } from "react";

import * as Styled from "./styles";

const Divider = () => {
  return (
    <Styled.Container>
      <h2>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </h2>
    </Styled.Container>
  );
};

export default memo(Divider);
