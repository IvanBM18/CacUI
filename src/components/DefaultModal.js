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



// export const DefaultModal = (props) => {
//   console.log("Inside the modal!",props)
//   return(
//     <>
//         <Dialog 
//           as="div"
//           className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen overflow-y-auto bg-black bg-opacity-30"
//           onClose={() =>  {
//             if(props.onClose != null){
//               props.onClose()
//             }
//           }}>
        
//           <div className="min-h-screen px-4 text-center">
          
//               <DialogPanel className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//                 <div className="flex items-center justify-between pb-8">
//                   <DialogTitle 
//                     as="h3" 
//                     className="text-xl font-bold leading-6 text-gray-900"
//                   >
//                     Hello world!
//                   </DialogTitle>
//                 </div>
//                 <div className="w-full max-w-lg text-green-600">
//                   Some Text 
//                 </div>
//               </DialogPanel>
//           </div>
//         </Dialog>
//     </>
//   )
// }
