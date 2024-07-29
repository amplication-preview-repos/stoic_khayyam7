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
import { IndividualIncomeTaxWhereInput } from "./IndividualIncomeTaxWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { IndividualIncomeTaxOrderByInput } from "./IndividualIncomeTaxOrderByInput";

@ArgsType()
class IndividualIncomeTaxFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => IndividualIncomeTaxWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => IndividualIncomeTaxWhereInput, { nullable: true })
  @Type(() => IndividualIncomeTaxWhereInput)
  where?: IndividualIncomeTaxWhereInput;

  @ApiProperty({
    required: false,
    type: [IndividualIncomeTaxOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [IndividualIncomeTaxOrderByInput], { nullable: true })
  @Type(() => IndividualIncomeTaxOrderByInput)
  orderBy?: Array<IndividualIncomeTaxOrderByInput>;

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

export { IndividualIncomeTaxFindManyArgs as IndividualIncomeTaxFindManyArgs };
