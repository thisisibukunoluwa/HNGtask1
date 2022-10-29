

import React from 'react'
import { Tooltip } from "@mui/material";
import { RWebShare } from "react-web-share";

const LinkItem = ({
    id,
    link,
    linkText,
    linkDetails,
    linkTitle,
    linkSubText
}) => {
   
return (
        <div>
            <Tooltip
                title={linkDetails}
                arrow>
                <a href={link} id={id} className="link-tree-linkItem" target="_blank" rel="noreferrer nooppener" onClick={(e) => {
                    e.preventDefault();
                    if (e.target === e.currentTarget) {
                        window.location.href = link;
                    }
                }}>
                    <span></span>

                    {linkText}

                    <RWebShare
                        data={{
                            text: linkTitle,
                            url: link,
                            title: linkSubText,
                        }}

                    >
                        <span onClick={(e) => {
                            e.preventDefault();
                        }}>
                            <div className="share-icon">
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.3261 8.50617C16.5296 8.3318 16.6313 8.24461 16.6686 8.14086C16.7013 8.0498 16.7013 7.9502 16.6686 7.85914C16.6313 7.75539 16.5296 7.6682 16.3261 7.49383L9.26719 1.44331C8.917 1.14315 8.74191 0.993063 8.59367 0.989386C8.46483 0.986191 8.34177 1.04279 8.26035 1.14269C8.16667 1.25764 8.16667 1.48825 8.16667 1.94948V5.52886C6.38777 5.84007 4.75966 6.74146 3.54976 8.09489C2.23069 9.57043 1.50103 11.48 1.5 13.4591V13.9691C2.37445 12.9157 3.46626 12.0638 4.70063 11.4716C5.78891 10.9495 6.96535 10.6403 8.16667 10.5588V14.0505C8.16667 14.5117 8.16667 14.7424 8.26035 14.8573C8.34177 14.9572 8.46483 15.0138 8.59367 15.0106C8.74191 15.0069 8.917 14.8569 9.26719 14.5567L16.3261 8.50617Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" tabIndex="0" />
                                </svg>
                            </div>
                        </span>
                    </RWebShare>
                </a>
            </Tooltip>
        </div >
    );
};


export default LinkItem;

















































// useEffect(
//     () => {

// }, [showToolTip]);


{/* <ActivateToolTip ID = {id}/> */}


//  const container = useRef(null);
//  const [position, setPosition] = useState({});

//  function setTooltipActive(e, { ID }) {
//    console.log(e.target);
//    const containerPosition = e.target.getBoundingClientRect();
//    setPosition(containerPosition);
//    if (e.target === document.getElementsByClassName("ID")) return <Tooltip />;
//    //   setShowToolTip(true);
//    //   console.log("hekellele");
//  }

//  function ActivateToolTip() {
//    // if (ID === e.target.classlist)
//  }

//  function setTooltipInActive() {
//    setShowToolTip(false);
//  }

 // const [showToolTip, setShowToolTip] = useState(false);
   




//     const Tooltip = () => {
        
// };

//  <a
//                 className="links"
//                 href={link}
//                 id={id}
//                 key={id}
//                 data-for={id}
//                 data-tip={subtext}
//                 data-event="focus" 
//                 data-padding="8px 21px"
//                 multiline="true"
//               >
//                 {name}
//               </a>
//               <ReactTooltip
//                 place="top"
//                 id={id}
//                 aria-haspopup="true"
//                 role="example"
//               />
//             </>

//  //  const [referenceElement, setReferenceElement] = useState(null);
//     const referenceElement = useRef()
//     const popperElement = useRef()
//     //  const [popperElement, setPopperElement] = useState(null);
//     //  const [arrowElement, setArrowElement] = useState(null);
//     const arrowElement = useRef()
//      const { styles, attributes } = usePopper(referenceElement.current, popperElement.current, {
//        modifiers: [{ name: "arrow", options: { element: arrowElement.current } }],
//      });

//               <div
//                 ref={popperElement}
//                 style={styles.popper}
//                 {...attributes.popper}
//               >
//                {subtext}
//                 <div ref={arrowElement} style={styles.arrow} />
//               </div>
//             </>