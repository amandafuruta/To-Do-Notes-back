/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesDTO } from './notes.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) { }

  @Post()
  async create(@Body() createNoteDto: NotesDTO) {
    return this.notesService.create(createNoteDto);
  }

  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() createNoteDto: NotesDTO) {
    return this.notesService.update(+id, createNoteDto);
  }

  @Put('reorder/:id')
  async reorder(@Param('id') id: string, @Body() createNoteDto: NotesDTO) {
    // console.log(`teste ${id} ${createNoteDto}`)
    return this.notesService.reorder(+id, createNoteDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.notesService.remove(parseInt(id));
  }
}
