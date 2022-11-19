import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMOvieRentDTO } from "./../../dtos/CreateMovieRentDTO";
export class CreateMovieRentUseCase {
  async execute({ movieId, userId }: CreateMOvieRentDTO): Promise<void> {
    const movieExists = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movieExists) {
      throw new AppError("Movie does not exists!");
    }

    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: {
        movieId,
      },
    });

    if (movieAlreadyRented) {
      throw new AppError("Movie already rented!");
    }

    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError("User does not exists!");
    }

    await prisma.movieRent.create({
      data: {
        movieId,
        userId,
      },
    });
  }
}
