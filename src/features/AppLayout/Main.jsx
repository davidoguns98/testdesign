function Main() {
  return (
    <div className="grid grid-cols-[70%_1fr]  gap-8 py-8 px-4 text-stone-900">
      <div className="flex flex-rows">
        <div className="h-[30%] w-full">
          <img src="./bg-1.jpg" alt="" />
        </div>
        <div>
          <h2 className="font-bold tracking-wide text-2xl mb-2">
            Course Overview
          </h2>
          <h3 className="font-semibold mb-4">About the Course</h3>

          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            mollitia excepturi, id tempore repudiandae doloribus voluptas
            voluptatem dolorum maxime neque nemo deleniti, ab nam libero sint,
            praesentium distinctio. Provident veritatis aperiam quos tempora
            dolor reprehenderit est, architecto suscipit culpa quasi asperiores
            tempore, repellat, sit ipsa consequuntur illum! Corporis eligendi
            ea, iste voluptas ab magni, doloribus reprehenderit odit quis a
            obcaecati facilis sit ipsum! Quae nisi itaque error dignissimos
            earum, laudantium consequatur iure pariatur perspiciatis adipisci
            dolorem sequi aspernatur delectus. Voluptates aliquam veritatis
            ipsam cum inventore non consequatur, aliquid suscipit, repudiandae
            reprehenderit commodi quasi recusandae nemo porro maiores quam
            perferendis ipsa amet illo unde minima ullam.
          </p>

          <ul className="pl-8 list-disc">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              amet excepturi .
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              amet excepturi .
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              amet excepturi .
            </li>
          </ul>
          <div>
            <h3>Duration</h3>
            <p>3 weeks</p>
          </div>
          <div>
            <h3>Resources</h3>
          </div>
        </div>
      </div>

      <div>
        <div className="border border-stone-400 rounded-md">
          <h2>N35,000.00</h2>
          <div>
            <div>
              <div>
                <span>⏱</span> <p>Course duration </p>
              </div>
              <p>3 weeks</p>
            </div>

            <div>
              <div>
                <span>📶</span> <p>Course level </p>
              </div>
              <p>Beginner</p>
            </div>

            <div>
              <div>
                <span>👩‍🎓👨‍🎓</span> <p>Students Enrolled </p>
              </div>
              <p>72</p>
            </div>

            <div>
              <div>
                <span>🌃</span> <p>Sutitle Language </p>
              </div>
              <p>English</p>
            </div>
          </div>
        </div>
        <div className="border border-stone-400 rounded-md">
          <div className="bg-stone-400">
            <div>
              <p>Course Outline</p>
            </div>
            <div>
              <p>Duration</p>
            </div>
          </div>

          <div>
            <div>
              <p>Introduction to Product design</p>
            </div>
            <div>
              <p>week 1</p>
            </div>
          </div>

          <div>
            <div>
              <p>Design Principles</p>
            </div>
            <div>
              <p>Week 2</p>
            </div>
          </div>

          <div>
            <div>
              <p>User Purpose</p>
            </div>
            <div>
              <p>Week 3</p>
            </div>
          </div>

          <div>
            <div>
              <p>Projects and Practicals</p>
            </div>
            <div>
              <p> Week 4</p>
            </div>
          </div>
        </div>

        <div className="border border-stone-400 rounded-md">
          <div>
            <h3>Ogungbemi David</h3>
            <p>Product Designer</p>
            <p>Course instructor</p>
            <img
              src=""
              alt=""
              className="rounded-full border border-stone-500"
            />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              quasi in iusto itaque provident sunt quas optio perspiciatis illo.
              Exercitationem fuga cum itaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
