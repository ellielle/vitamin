import { rest } from "msw";

export const handlers = [
  rest.post("https://pokeapi.co/api/v2/pokemon/", (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json({
        data: {
          sprites: {
            front_default: "./162.png",
          },
        },
      }),
    );
  }),
];