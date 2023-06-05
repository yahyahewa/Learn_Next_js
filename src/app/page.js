import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";
import CategoryContent from "@/components/category/CategoryContent";
import ShopsSlider from "@/components/shopslider/ShopsSlider";
import Footer from "@/components/footer/Footer";
export default function Home() {
  const images = [
    "https://i.etsystatic.com/20474780/r/il/4103fa/4898490938/il_340x270.4898490938_dhb6.jpg",
    "https://i.etsystatic.com/38091196/r/il/06d288/4893792033/il_340x270.4893792033_kqju.jpg",
    "https://i.etsystatic.com/22537583/r/il/9e592b/4313965707/il_340x270.4313965707_218p.jpg",
    "https://i.etsystatic.com/27234269/c/1399/1112/843/675/il/80b2d8/4874024715/il_680x540.4874024715_folj.jpg",
    "https://i.etsystatic.com/22537583/r/il/9e592b/4313965707/il_340x270.4313965707_218p.jpg",
    "https://i.etsystatic.com/20474780/r/il/4103fa/4898490938/il_340x270.4898490938_dhb6.jpg",
    "https://i.etsystatic.com/27234269/c/1399/1112/843/675/il/80b2d8/4874024715/il_680x540.4874024715_folj.jpg",
    "https://i.etsystatic.com/38091196/r/il/06d288/4893792033/il_340x270.4893792033_kqju.jpg",
    "https://i.etsystatic.com/27234269/c/1399/1112/843/675/il/80b2d8/4874024715/il_680x540.4874024715_folj.jpg",
    ,
    "https://i.etsystatic.com/12794159/r/il/2eb960/1684539712/il_340x270.1684539712_ot78.jpg",
    "https://i.etsystatic.com/27234269/c/1399/1112/843/675/il/80b2d8/4874024715/il_680x540.4874024715_folj.jpg",
    ,
    "https://i.etsystatic.com/17725283/r/il/73d9ef/1676042173/il_340x270.1676042173_r6ug.jpg",
  ];
  return (
    <main className="home m-0 p-0 h-auto  min-h-screen ">
      <Navbar />
      <ShopsSlider />
      <Card product={images} />
      <CategoryContent />
      <CategoryContent />
      <Footer />
    </main>
  );
}
