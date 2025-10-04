import Container from "@mui/material/Container";

export const Introduction = () => {
  return (
    <Container className="p-4" id="introduccion">
      <h2 className="text-3xl my-2 font-bold">Introduction</h2>
      <p className="mt-2">
        <strong>
          What if the ground that supports our cities and our most fertile
          fields were silently crumbling beneath our feet?
        </strong>{" "}
        In many regions of the world, an invisible crisis is unfolding. To meet
        the water needs of intensive agriculture and large metropolises, we are
        emptying underground aquifers at an unsustainable rate, and the
        consequence is both unnoticed and irreversible: the land itself is
        sinking, threatening to destroy everything we have built upon it.
      </p>
      <p className="mt-4">
        A prime example of this phenomenon is the San Joaquin Valley in
        California (US). There, the extraction of groundwater for agriculture
        has allowed the area to become one of the world's most productive
        agricultural regions, while simultaneously contributing to one of the
        largest human-caused alterations of the Earth's surface.
      </p>
      <blockquote className="mt-8 border-l-4 border-red-500 pl-4 italic text-xl text-gray-700">
        But, are we unaffected by this issue?
      </blockquote>
      <p className="mt-8">
        {" "}
        In west-central Argentina lies Mendoza, a province located at the foot
        of the Andes mountains. It is known for being a major agricultural
        producer and also for being Argentina's main wine-producing province,
        accounting for more than 70% of the national wine production.
      </p>
      <p className="mt-4">
        Having many points in common with California, it becomes a place of
        interest for investigating the subsidence that can occur.
      </p>
    </Container>
  );
};
