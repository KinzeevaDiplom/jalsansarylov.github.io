import "./App.css";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="app">
      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        section
      </Link>
      <Link
        activeClass="active"
        to="section2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        section
      </Link>
      <Link
        activeClass="active"
        to="section3"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        section
      </Link>

      <div className="content">
        <div className="container">
          <section id="section1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ea
            labore ex dolor qui ducimus hic, nesciunt libero deserunt a,
            reprehenderit eaque, in cum dicta fuga voluptate doloremque
            delectus. Incidunt? Alias aperiam tempora, qui dolore quae, iure sed
            explicabo ut architecto natus rem? Expedita error aut saepe
            excepturi magnam, dignissimos maiores, nam laudantium tempora
            impedit dolores repudiandae, et aliquid asperiores. Iusto laudantium
            praesentium nemo id sequi distinctio possimus nam libero quibusdam
            voluptatem? Nemo, iusto modi aliquid quis aspernatur consequuntur
            dolore qui vero perspiciatis at ipsum officiis veritatis, tempore
            fugiat quam. Obcaecati optio laborum temporibus harum quod voluptas
            nihil provident molestias, eligendi beatae fugit iste. Tempora sed
            obcaecati, minus alias enim voluptas suscipit modi ut, repellendus,
            dolores quisquam esse eos possimus? Nam nostrum hic dicta blanditiis
            aliquam reprehenderit, dolore in eligendi facere consectetur
            corporis dolorum libero velit fuga asperiores enim ipsum ea modi,
            provident vel natus quisquam accusantium? Culpa, voluptate dolor.
          </section>
          <section id="section2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ea
            labore ex dolor qui ducimus hic, nesciunt libero deserunt a,
            reprehenderit eaque, in cum dicta fuga voluptate doloremque
            delectus. Incidunt? Alias aperiam tempora, qui dolore quae, iure sed
            explicabo ut architecto natus rem? Expedita error aut saepe
            excepturi magnam, dignissimos maiores, nam laudantium tempora
            impedit dolores repudiandae, et aliquid asperiores. Iusto laudantium
            praesentium nemo id sequi distinctio possimus nam libero quibusdam
            voluptatem? Nemo, iusto modi aliquid quis aspernatur consequuntur
            dolore qui vero perspiciatis at ipsum officiis veritatis, tempore
            fugiat quam. Obcaecati optio laborum temporibus harum quod voluptas
            nihil provident molestias, eligendi beatae fugit iste. Tempora sed
            obcaecati, minus alias enim voluptas suscipit modi ut, repellendus,
            dolores quisquam esse eos possimus? Nam nostrum hic dicta blanditiis
            aliquam reprehenderit, dolore in eligendi facere consectetur
            corporis dolorum libero velit fuga asperiores enim ipsum ea modi,
            provident vel natus quisquam accusantium? Culpa, voluptate dolor.
          </section>
          <section id="section3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ea
            labore ex dolor qui ducimus hic, nesciunt libero deserunt a,
            reprehenderit eaque, in cum dicta fuga voluptate doloremque
            delectus. Incidunt? Alias aperiam tempora, qui dolore quae, iure sed
            explicabo ut architecto natus rem? Expedita error aut saepe
            excepturi magnam, dignissimos maiores, nam laudantium tempora
            impedit dolores repudiandae, et aliquid asperiores. Iusto laudantium
            praesentium nemo id sequi distinctio possimus nam libero quibusdam
            voluptatem? Nemo, iusto modi aliquid quis aspernatur consequuntur
            dolore qui vero perspiciatis at ipsum officiis veritatis, tempore
            fugiat quam. Obcaecati optio laborum temporibus harum quod voluptas
            nihil provident molestias, eligendi beatae fugit iste. Tempora sed
            obcaecati, minus alias enim voluptas suscipit modi ut, repellendus,
            dolores quisquam esse eos possimus? Nam nostrum hic dicta blanditiis
            aliquam reprehenderit, dolore in eligendi facere consectetur
            corporis dolorum libero velit fuga asperiores enim ipsum ea modi,
            provident vel natus quisquam accusantium? Culpa, voluptate dolor.
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
