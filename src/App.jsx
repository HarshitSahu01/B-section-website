import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import CursorTrail from "./Components/CursorTrail";

function App() {
  return (
    <div>
      
      <Navbar />
      <CursorTrail/>
      <div className="min-h-screen">
        <h1 className="text-center">B Section Website Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, esse! Aspernatur, quasi! Aperiam eligendi voluptate id laboriosam quaerat quo a perspiciatis, totam tempora deserunt, nisi, maxime nihil quam voluptatibus officia expedita! Nemo iure suscipit omnis laboriosam molestias. Nulla perferendis dolor necessitatibus culpa sint iure ex at sed placeat, mollitia praesentium quia atque quam debitis quae facere. Minus quas nesciunt perferendis. Facilis, quod neque dolorum pariatur id totam ab aspernatur. Illo laborum quaerat sed autem blanditiis minima dolore fugit quasi, magni velit sunt similique, aspernatur earum aut eius nobis repudiandae cum rem dolores! Sapiente in, excepturi cumque eos saepe omnis modi fuga blanditiis voluptas. Nihil, modi! Velit aut libero accusantium ab expedita autem exercitationem cumque amet sunt cum corrupti dolore distinctio consectetur, quia tenetur? Pariatur nulla, nostrum, eius placeat asperiores facere eveniet delectus aliquid labore possimus molestiae a reiciendis, maxime quam ullam omnis nisi. Laborum dignissimos, eius doloremque impedit optio rerum iusto ea architecto! Asperiores dicta eum rem velit esse odit neque blanditiis? Nam, expedita cupiditate, sed tempora necessitatibus omnis iste hic eveniet fuga itaque doloremque voluptate nobis distinctio inventore quibusdam accusamus esse voluptates magni quas molestias ducimus at sequi cumque! Praesentium earum beatae modi dignissimos, accusamus distinctio at nulla sequi, voluptatum placeat alias nostrum rerum ducimus quos quod, eos maiores ea. Enim nam rerum quae laborum ea, consequuntur corrupti beatae asperiores cum adipisci perferendis. Pariatur, accusantium nemo eos nulla quibusdam dignissimos distinctio aliquam, molestiae ducimus tempora deserunt. Maiores animi consequuntur suscipit ad? Alias eligendi vel libero numquam reiciendis doloribus voluptates quasi, odio odit dignissimos dicta praesentium debitis explicabo incidunt perspiciatis exercitationem beatae reprehenderit nostrum tempore sapiente quam sed inventore repellendus accusantium. Similique nesciunt modi repellendus autem quasi vel omnis harum alias id, dolorum quia quis quae quas porro, sunt, nobis incidunt vero quidem exercitationem maxime dolorem totam molestias laboriosam eligendi. Quisquam veniam quas consectetur voluptate, quo officiis laborum illum alias blanditiis doloremque est temporibus numquam voluptas repudiandae at esse ex vitae laboriosam non voluptates assumenda dicta impedit! Possimus, consequuntur fugiat eveniet similique cumque cum eum iure hic ipsam iusto esse laboriosam ipsum repellendus unde est quaerat dignissimos nostrum impedit accusamus. Odio, obcaecati odit! Blanditiis placeat nostrum explicabo, quis ratione molestias recusandae minus totam excepturi laborum repudiandae ex ut magni officiis iusto, sint, nihil necessitatibus quo libero tempore asperiores dignissimos at debitis natus. Quia, voluptatum assumenda qui beatae omnis cupiditate! Repellat sequi itaque obcaecati doloribus nihil vel, rem perspiciatis nulla debitis cumque, necessitatibus magni laborum incidunt, beatae accusamus temporibus error fuga recusandae eos exercitationem quaerat et. Consequuntur, quo quod atque eveniet asperiores nemo quibusdam quisquam ipsam adipisci dolores natus iure corporis. Laudantium voluptatibus facere laboriosam autem corrupti fuga mollitia, vel amet magni asperiores laborum repellat magnam ipsa illo dolor delectus adipisci ea distinctio odio! Ab nemo animi doloremque id quae autem, illo maxime assumenda? Soluta ipsum ea repellendus quae voluptates? Accusantium reprehenderit, exercitationem iure sit facere, magnam, ut officia explicabo hic nulla assumenda cumque voluptatibus soluta porro id architecto mollitia! Quasi officia blanditiis temporibus praesentium, aut repellendus tempore voluptatum debitis laborum.</p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <footer className="bg-opacity-80 bg-slate-500 h-[10vh] flex justify-center items-center">Footer hai ye</footer>
    </div>
  );
}

export default App;
