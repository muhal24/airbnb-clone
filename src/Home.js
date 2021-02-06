import React from 'react';
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";



function Home() {
    return (
        <div className="home">
            <Banner/>
    <div class="home__section">
      <Card 
      src="https://grandpamirhotel.com/img/room/single/600x400.jpg"
      title="Home for couples"
      description="Confortable private places, with room for family."
      />
      <Card
      src="https://www.recommend.my/blog/wp-content/uploads/2016/12/gita_2620_1_final-600x400-1.jpg"
      title="Home for couples"
      description="Confortable private places, with room for family."
      />
      <Card
      src="https://blog.leonardo.com/wp-content/uploads/2014/08/nice.hotel_.room_.atiketta.sangasaeng.jpg"
      title="Home for couples"
      description="Confortable private places, with room for family."
      />
    </div>
    <div class="home__section">
      <Card
      src="https://assets.oakshotels.com/image/upload/q_auto,f_auto/media/minor/oaks/images/australia/queensland/regional/cairns/600x400/hotel-room-internal/oaks-cairns-hotel-hotel-room-internal-2-600x400.jpg"
      title="Home for couples"
      description="Confortable private places, with room for family."
      price="$50/Night"
      />
      <Card
      src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/77329713704049.5627727f54be5.jpg"
      title="Home for couples"
      description="Confortable private places, with room for family."
      price="$60/Night"
      />
      <Card
      src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp"
      title="Home for couples"
      description="Confortable private places, with room for family."
      price="$100/Night"
      />
    </div>
        </div>
    )
}

export default Home;
