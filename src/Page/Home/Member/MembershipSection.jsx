import img1 from '../../../assets/1200px-Ribbonstar-silver.svg.png'
import img2 from '../../../assets/Golden_star.svg.png'
import MemberCart from './MemberCart';
const img3 = 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL2pvYjk2OC1lbGVtZW50LTAxMi14LmpwZw.jpg'

const MembershipSection = () => {
    return (
        <div className="grid grid-cols-3 justify-between">

            <MemberCart items={img1} price={50}></MemberCart>
            <MemberCart items={img2} price={70}></MemberCart>
            <MemberCart items={img3} price={99}></MemberCart>
            
        </div>
    );
};

export default MembershipSection;