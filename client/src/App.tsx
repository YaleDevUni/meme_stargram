import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import GroupList from './components/group_list';
import { Navbar } from './components/nav_bar';

function App() {
  return (
    <>
      <header>
        <Navbar is_signed_in={true} name={'Anon'} new_alarm={3} />
      </header>
      <div className="container m-10 mx-auto rounded-xl border bg-gray-200 p-8 shadow">
        <p className="mb-5 text-3xl font-bold text-gray-700">Welcome!</p>
        <p className="text-lg text-gray-500">
          React and Tailwind CSS in action Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Pariatur expedita, nemo aperiam,
          dolorem nisi, architecto consequatur ipsa libero voluptate iusto
          adipisci ipsam molestias eius! In iste ea harum dolores repellat?
          Similique earum, et, doloribus labore numquam ut quae aut harum nisi
          asperiores minima ducimus, iure ab quibusdam? Facilis rerum quidem
          tempora magnam, veniam mollitia omnis necessitatibus. Neque iusto quos
          suscipit! Sequi reiciendis accusamus fuga animi dicta praesentium vel
          iste optio quas distinctio saepe, nemo natus hic voluptatibus facere
          pariatur minima repellat eum a sint ipsam, in porro? Dolorum, nobis
          distinctio? Cumque optio debitis perferendis eos, reprehenderit nemo
          molestiae esse suscipit magni eaque voluptate, temporibus corrupti
          animi et accusantium ab aliquam libero at maxime! Voluptatem quae in
          voluptatibus tempore pariatur fugit. Saepe est aperiam neque, mollitia
          illum, praesentium earum facere harum assumenda quae corrupti,
          necessitatibus rem ex! Reiciendis, a quae consectetur consequatur
          totam autem cumque ad veniam ab. Suscipit, ratione nihil. Fuga, esse!
          Eius porro repellat eaque, consectetur ullam incidunt vitae, aliquid
          delectus architecto inventore id ex deserunt culpa! Repellendus
          consequuntur necessitatibus adipisci, quod eos beatae sit itaque rem
          cumque et. Cupiditate at ipsa assumenda amet quia! Temporibus, autem
          quae enim quod minima deserunt quasi doloribus libero, harum quam
          earum, iste impedit doloremque! Harum voluptates quisquam cumque eum
          hic qui deserunt. Perferendis doloribus repudiandae non beatae vitae
          aliquid quis sapiente explicabo quo modi. Sed unde, aspernatur fugiat
          velit non autem totam cupiditate, ab sunt aliquid cum ut, impedit
          enim! Animi, adipisci. Quisquam, reiciendis, consectetur neque
          laudantium unde esse animi perferendis modi nostrum est commodi sint
          ipsum, ratione asperiores. Temporibus vel eum rerum rem voluptas,
          aperiam eligendi, facere quasi cumque modi ullam! Sapiente architecto
          autem vel nostrum accusantium excepturi ex ipsam? Voluptatum sapiente
          architecto dolorum vitae provident delectus commodi reprehenderit
          sequi nemo iusto ad eius, quibusdam culpa rem excepturi incidunt atque
          molestiae? Fuga corrupti enim similique natus commodi, architecto
          obcaecati soluta laborum! Aliquid dicta molestias id magnam mollitia
          minus at nostrum officiis quibusdam libero corporis itaque modi,
          dolorum, consequatur, ullam odit sapiente. Quidem tempore aliquid
          alias soluta? Recusandae et excepturi ab nesciunt sequi ratione
          quaerat quidem quae impedit nihil, nostrum eum animi quas qui
          accusantium earum! Modi molestias inventore obcaecati sapiente culpa!
          Quaerat impedit eveniet nostrum reprehenderit qui beatae corporis quas
          in ea repudiandae, aut vel quos perferendis iure optio reiciendis ipsa
          velit, enim laborum facilis eaque consequuntur voluptate blanditiis.
          Ex, soluta. Temporibus ipsa, reiciendis rem porro architecto expedita
          dolores recusandae placeat unde velit quam, quasi cumque eveniet
          consequatur nobis exercitationem fugiat quis explicabo? Esse
          explicabo, atque eius dolorum facere odit eaque! Enim quia, reiciendis
          deserunt minima accusamus fugit nihil consequatur debitis blanditiis.
          Animi facere praesentium laudantium hic doloribus, error iusto modi,
          repellendus ratione, saepe eum veniam dignissimos minus provident!
          Ipsam, ipsum. Harum quisquam placeat, doloribus provident nemo minus
          quis repellat. Nobis odio nihil sunt perferendis iste dolor aliquid
          magnam ad assumenda iure quisquam nam cumque fugit vitae provident,
          ullam ducimus quo! Suscipit dolor, dolorum aspernatur dicta vel facere
          iste hic repudiandae unde fuga, porro officia error odio consequuntur,
          expedita illo ea dolores. Culpa, autem voluptas. Error in cum minima
          debitis voluptatem? Minima reprehenderit laborum accusamus porro
          deserunt et dolorum quisquam? Dolores dolorem voluptas odio ratione
          pariatur est, enim fuga, totam impedit, eum iusto numquam libero
          possimus esse. Id quasi veniam error. Nesciunt vero, nam sunt facere
          ratione minus fugit totam cupiditate quae? Quisquam laudantium
          architecto eligendi explicabo, veritatis, delectus harum ipsam esse
          minus eos in ratione, accusamus non est maxime temporibus. Quo
          sapiente voluptas illum minima officiis, facere, asperiores minus
          culpa commodi quis ut molestiae laudantium amet iusto debitis, alias
          iste ipsam facilis cum. Odit magni atque iure minus libero corrupti.
          Adipisci distinctio, vel repellat, culpa tenetur, similique quaerat
          eaque soluta a qui voluptates magnam laboriosam nihil quam dolore
          necessitatibus autem omnis? Laboriosam facere optio quam in distinctio
          architecto sapiente natus! Laborum quisquam animi, incidunt commodi
          maiores sint fugit id molestias. Pariatur suscipit ea impedit
          quisquam, quas laborum molestias ab minus, at cupiditate, et id natus
          quasi labore. Mollitia, corrupti ut. Tenetur quos sint repudiandae
          atque quis maxime quibusdam quas magnam sunt eius, officiis fugit qui
          nam earum facilis molestias vel repellendus in, modi ad voluptatum!
          Alias illum a doloribus voluptas. Similique, perferendis distinctio,
          totam molestiae tempora necessitatibus culpa optio eveniet illum
          molestias natus, quos consequuntur minus deleniti atque a dolorem
          officia nisi quibusdam ducimus quam vel beatae. Ipsa, repellendus
          minus! Voluptas quia dolor ducimus beatae facere, delectus nisi
          laboriosam rerum aliquam, a aliquid alias nobis. Alias eos veritatis
          repudiandae quae corporis explicabo voluptatem ab nulla, voluptas
          reiciendis suscipit repellat facere. Reiciendis ducimus autem
          similique, animi sed explicabo, adipisci corrupti laborum facilis
          distinctio iste nihil tenetur omnis modi perspiciatis voluptatum vitae
          quisquam. Aliquam debitis tempora enim culpa quasi! Quis, corporis
          omnis! Veritatis dolorum repudiandae illo aspernatur pariatur ipsa
          totam voluptatum impedit temporibus? Atque nihil, blanditiis cum quod
          asperiores quidem, nemo modi enim facere voluptatibus in eius, est
          commodi architecto maxime et? Laudantium incidunt error molestiae
          laboriosam vero atque aliquam accusantium voluptates. Porro, natus
          doloribus voluptate aspernatur, harum, cumque totam beatae quis
          laudantium quisquam molestias tempora illo eius consequatur et
          veritatis reiciendis. Necessitatibus voluptate, labore temporibus
          alias corporis saepe voluptates voluptatum ad quam, dolorem eligendi
          dolorum, sunt quod fuga impedit. Nam, blanditiis? Omnis natus beatae
          culpa commodi ut quas, repellendus maiores perspiciatis! Eligendi,
          praesentium repellat necessitatibus eaque sint hic ab dignissimos quae
          reiciendis ullam unde nam in nesciunt ex dolores quis dolorem eos aut.
          Soluta maxime iusto provident suscipit cumque esse placeat?
        </p>
        <GroupList />
      </div>
    </>
  );
}

export default App;
