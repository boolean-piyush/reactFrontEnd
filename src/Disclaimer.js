import React, { useState } from "react";
import { Button, Dimmer, Icon } from "semantic-ui-react";

export default function DisclaimerDimmer() {
  const [active, toggleActive] = useState(false);

  const handleOpen = () => toggleActive(true);
  const handleClose = () => toggleActive(false);

  return (
    <div>
        <Button primary onClick={handleOpen}>Disclaimer</Button>
      <Dimmer active={active} onClickOutside={handleClose} page>
          <h1><Icon name='warning sign' /></h1>
          <h3> This is a frontend demonstration website. <br/> 
          It has no backend or database.<br/> On reload/refresh, your items will be lost.</h3>
      </Dimmer>
    </div>
  );
}
