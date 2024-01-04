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
    return this.prisma.note.findMany({
      orderBy: {
        order: 'asc'
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, body) {
    return this.prisma.note.update({
      where: {
        id
      },
      data: {
        statusId: parseInt(body.statusId)
      }
    })
  }

  reorder(id: number, body) {
    return this.prisma.note.update({
      where: {
        id
      },
      data: {
        order: parseInt(body.order)
      }
    })
  }

  async remove(id: number) {
    return this.prisma.note.delete({
      where: {
        id
      }
    })
  }
}
