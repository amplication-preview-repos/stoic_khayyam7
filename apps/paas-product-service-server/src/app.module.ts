import { Module } from "@nestjs/common";
import { IndividualIncomeTaxModule } from "./individualIncomeTax/individualIncomeTax.module";
import { BusinessIncomeTaxModule } from "./businessIncomeTax/businessIncomeTax.module";
import { TdsModule } from "./tds/tds.module";
import { GstModule } from "./gst/gst.module";
import { LegalComplianceModule } from "./legalCompliance/legalCompliance.module";
import { UserModule } from "./user/user.module";
import { AiPoweredGstModule } from "./aipoweredgst/aipoweredgst.module";
import { AiPoweredIncomeTaxModule } from "./aipoweredincometax/aipoweredincometax.module";
import { AiPoweredTdsModule } from "./aipoweredtds/aipoweredtds.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    IndividualIncomeTaxModule,
    BusinessIncomeTaxModule,
    TdsModule,
    GstModule,
    LegalComplianceModule,
    UserModule,
    AiPoweredGstModule,
    AiPoweredIncomeTaxModule,
    AiPoweredTdsModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
