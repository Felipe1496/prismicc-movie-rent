import { AppError } from "../../../../errors/AppError";
import { Movie, User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateMovieDTO";

export class CreateMovieUseCase {
  async execute({
    title,
    duration,
    release_date,
  }: CreateUserDTO): Promise<Movie> {
    const movieAlreadyExists = await prisma.movie.findUnique({
      where: {
        title,
      },
    });

    if (movieAlreadyExists) {
      throw new AppError("Movie already exists!");
    }

    const movie = await prisma.movie.create({
      data: {
        title,
        duration,
        release_date,
      },
    });

    return movie;
  }
}
