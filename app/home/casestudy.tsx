// import { FiHeadphones } from "react-icons/fi";
import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
interface ImgMediaCardProps {
    image: string;
    title: string;
    description: string;
  }
  
  const ImgMediaCard: React.FC<ImgMediaCardProps> = ({ image, title, description }) => {
    return (
        <Card sx={{ maxWidth: 345,
            backgroundColor:'transparent',
            border:'none',
           boxShadow:'none',
        }}>
            <CardMedia
            component="img"
            alt={title}
            height="100"
            image={image}
            style={{ width: '593px', height: '235px', borderRadius:'10px' }} 
            />
            <CardContent>   
            <Typography variant="body2" color="text.secondary" className="text-left flex justify-start -ml-4 font-mono-sans text-[18px] text-black font-bold">
              {description}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" className="-ml-3">
                <h2 className="text-orange-500 font-serif flex flex-row normal-case font-bold">Read more<img src="/orangearrow.svg" className="ml-2"/></h2></Button>
            </CardActions>
            
        </Card>
    );
  };
const CaseStudy = () => {
  return (
  <div className="w-full bg-[#F5F5F5] mb-20">
    <div className="flex flex-row justify-between ">  {/* main div for all the items excluding bg color */}
    <div className="flex flex-col w-[1219px] items-center justify-center mx-auto gap-20 mt-20 mb-20"> {/* div for heading nad images */}
      <div className="-ml-[670px]">
<div className="ml-[710px] ma:ml-[700px]">
  <h2 className="heading font-semibold">Our Featured CaseStudy</h2>
  <div className="w-[160px] ma:w-52 pa:w-[185px] h-1 bg-orange-500 ma:mt-2 ma:ml-[280px] pa:ml-[250px] "></div>
</div>
</div>
   <div className="ma:w-[1219px] flex flex-col ma:flex-row justify-around ml-10 gap-10">
          <ImgMediaCard 
            image="/casestudy1.png"
            title=""
            description="Snowmad Digital grows customer base by 
            450% with HostBuddy's Managed 
            WordPress Hosting"
          />
          <ImgMediaCard 
            image="/casestudy2.png"
            title=""
            description="Snowmad Digital grows customer base by 
            450% with HostBuddy's Managed 
            WordPress Hosting"
          />
          <ImgMediaCard 
            image="/casestudy3.png"
            title=""
            description="Snowmad Digital grows customer base by 
            450% with HostBuddy's Managed 
            WordPress Hosting"
          />
        </div>

</div>

  <img src="/dotted.svg" className="mr-1 w-[50px] md:w-[89.71px] md:h-[113.2px] opacity-0 md:opacity-100 mt-20"/>
  </div>
  </div>

  );
};
export default CaseStudy;











