/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotesDTO } from './notes.dto';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) { }

  async create(createNoteDto: NotesDTO) {
    const createData = await this.prisma.note.create({
      data: createNoteDto,
    });
    return {
      statusCode: 200,
      data: createData,
    };

  }

  findAll() {
    return this.prisma.note.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
