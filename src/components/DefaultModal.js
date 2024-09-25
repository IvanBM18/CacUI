import { CModal, CModalHeader, CModalBody, CButton, CModalTitle, CModalFooter } from "@coreui/react";

export const DefaultModal = (props) => {

  return(
    <>
      <CModal visible={true} onClose={props.onClose} >
        <CModalHeader>
          <CModalTitle>{props.title?? "Modal Title"}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {props.children ?? <p>Woohoo, you're reading this text in a modal!</p>}
        </CModalBody>
        {props.footer && 
          <CModalFooter>
            {props.footer}
          </CModalFooter>
        }
      </CModal>
    </>
  );
}
