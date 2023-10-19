import { useNavigate } from "react-router-dom";
import LayoutHeader from "D:/tripdly2/TRIPDLY/client/src/components/LayoutHeader.tsx"
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'

const Feeds = () => {
    const navi = useNavigate()
    return ( 
        // <>
        //   <Fullpage>
        //     <FullPageSections>
        //       <FullpageSection style={{
        //         height: '100vh',
        //         padding: '1em',
        //       }}>1</FullpageSection>
        //       <FullpageSection style={{
        //         padding: '1em',
        //       }}>2</FullpageSection>
        //       <FullpageSection style={{
        //         padding: '1em',
        //       }}>3</FullpageSection>
        //     </FullPageSections>
        //   </Fullpage>
        // </>
        <div className="flex w-full h-full">
          <div className="flex-1 bg-red-200">Image</div>
          <div className="flex-1 bg-blue-200">Content</div>
        </div>
     );
}
 
export default Feeds;