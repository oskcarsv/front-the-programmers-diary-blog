import welcomeGift from "../assets/img/welcome.gif";
import todoGift from "../assets/img/todo.gif";
import pc from "../assets/img/pc.png";
import phone from "../assets/img/phone.png";
import "../styles/content.css";
import "../styles/variables.css";

export const Content = () => {
  return (
    <main>
      <section className="s-welcome">
        <div className="welcome-text">
          <h1>Welcome</h1>
          <p className="p-welcome">
            Programmers Diary is a simple blog system that allows you to
            manage your repositories with ease. You can write comments and see projects.
          </p>
        </div>
        <div className="welcome-img">
          <img src={welcomeGift} alt="welcome" height="400px" width="600px" />
        </div>
      </section>

      <section className="s-todo-list">
        <div className="container-todo">
          <div className="todo-img">
            <img
              src={todoGift}
              alt="welcome"
              height="600px"
              width="700px"
            />
          </div>
          <div className="todo-text">
            <h1>Posts</h1>
            <p className="p-todo">
              A posts list on a webpage is a feature that allows users to create
              and manage a posts lists. It typically consists of a text field
              where users can enter the post name.
            </p>
          </div>
        </div>
      </section>

      <section className="s-avaible-on">
        <div className="container-avaible">
          <div className="avaible-text">
            <h1 className="">Avaible on</h1>
          </div>
          <div className="avaible-img">
            <img
              src={pc}
              alt="welcome"
              height="250px"
              width="250px"
            />
            <img
              src={phone}
              alt="welcome"
              height="250px"
              width="100px"
            />
          </div>
        </div>
      </section>

    </main>
  );
};
