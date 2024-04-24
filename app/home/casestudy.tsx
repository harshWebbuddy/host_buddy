import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ImgMediaCardProps {
  image: string;
  title: string;
  description: string;
}

const ImgMediaCard: React.FC<ImgMediaCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        alt={title}
        height="100"
        image={image}
        style={{ width: "100%", height: "auto", borderRadius: "10px" }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          className="text-left flex justify-start -ml-4 font-mono-sans text-[18px] text-black font-bold"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="-ml-3">
          <h2 className="text-orange-500 font-serif flex flex-row normal-case font-bold">
            Read More
            <img src="/orangearrow.svg" className="ml-2 w-[11px]" />
          </h2>
        </Button>
      </CardActions>
    </Card>
  );
};

const CaseStudy = () => {
  return (
    <div className="w-full bg-[#F5F5F5] sp:w-full">
      <img src="./homegaming/grayzig.svg" className="w-full" />

      <div className="2xl:w-[1920px] sp:w-full 2xl:h-[683px] mb-60 mp:mb-80 mx-auto items-center justify-center">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-[1219px] sp:w-full lg:ml-24 items-center justify-center mx-auto gap-20 mt-20 mb-20 xl:ml-20">
            <div className="-ml-[1300px]">
              <div className="ml-[1340px] md:ml-[1300px] pa:ml-[1300px] sp:ml-[1400px]">
                <h2 className="heading font-semibold">
                  Our Featured CaseStudy
                </h2>
                <div className="w-[160px] md:w-52 pa:w-[165px] h-1 bg-orange-500 md:mt-2 xl:w-[200px] xl:ml-[280px] 2xl:ml-[280px] 2xl:w-52 md:ml-[280px] pa:ml-[208px] transition-transform duration-400 hover:scale-110"></div>
              </div>
            </div>
            <div className="2xl:w-[1219px] sp:w-full sp:ml-24 xl:w-[1000px] xl:ml-28 flex flex-col md:flex-row justify-around ml-10 pa:ml-2 gap-10 pa:flex-wrap 2xl:flex-nowrap pa:w-[800px] xl:flex-row xl:flex-nowrap 2xl:ml-[720px]">
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
              <div className="flex 2xl:opacity-0 xl:opacity-0">
                <ImgMediaCard
                  image="/casestudy2.png"
                  title=""
                  description="Snowmad Digital grows customer base by 
                                    450% with HostBuddy's Managed 
                                    WordPress Hosting"
                />
              </div>
            </div>
          </div>

          <img
            src="/dotted.svg"
            className="mr-1 w-[50px] md:w-[89.71px] md:h-[113.2px] opacity-0 md:opacity-100 mt-20 items-end justify-end 2xl:opacity-100 pa:opacity-0 xl:opacity-100"
          />
        </div>
      </div>

      <img
        src="./homegaming/grayzig.svg"
        className="rotate-180 w-full -mt-80 mb-80"
      />
    </div>
  );
};

export default CaseStudy;
