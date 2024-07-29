/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TdsWhereInput } from "./TdsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TdsOrderByInput } from "./TdsOrderByInput";

@ArgsType()
class TdsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TdsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TdsWhereInput, { nullable: true })
  @Type(() => TdsWhereInput)
  where?: TdsWhereInput;

  @ApiProperty({
    required: false,
    type: [TdsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TdsOrderByInput], { nullable: true })
  @Type(() => TdsOrderByInput)
  orderBy?: Array<TdsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TdsFindManyArgs as TdsFindManyArgs };
