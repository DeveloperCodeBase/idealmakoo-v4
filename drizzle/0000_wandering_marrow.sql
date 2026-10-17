CREATE TABLE "crm_accounts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"type" varchar(100) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "crm_leads" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"account_id" uuid,
	"contact_name" varchar(255) NOT NULL,
	"contact_email" varchar(255),
	"contact_phone" varchar(50),
	"status" varchar(50) DEFAULT 'new' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "crm_opportunities" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"account_id" uuid,
	"lead_id" uuid,
	"title" varchar(255) NOT NULL,
	"stage" varchar(100) NOT NULL,
	"amount" integer,
	"currency" varchar(10) DEFAULT 'IRR',
	"probability" integer DEFAULT 0,
	"expected_close_date" timestamp,
	"owner_id" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "crm_cases" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"requester_id" uuid,
	"account_id" uuid,
	"subject" varchar(255) NOT NULL,
	"status" varchar(50) DEFAULT 'received' NOT NULL,
	"priority" varchar(50) DEFAULT 'normal' NOT NULL,
	"kind" varchar(50) DEFAULT 'support_ticket' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" varchar(100) PRIMARY KEY NOT NULL,
	"document_id" varchar(100) NOT NULL,
	"legacy_id" integer,
	"product_code" varchar(50) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"brand" varchar(100) NOT NULL,
	"family" varchar(50) NOT NULL,
	"lifecycle_status" varchar(50) NOT NULL,
	"localized" jsonb NOT NULL,
	"specs" jsonb NOT NULL,
	"variants" jsonb NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "products_product_code_unique" UNIQUE("product_code"),
	CONSTRAINT "products_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"role" varchar(50) DEFAULT 'customer' NOT NULL,
	"password_hash" varchar(255),
	"mfa_enabled" boolean DEFAULT false,
	"mfa_secret" varchar(255),
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "crm_leads" ADD CONSTRAINT "crm_leads_account_id_crm_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."crm_accounts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "crm_opportunities" ADD CONSTRAINT "crm_opportunities_account_id_crm_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."crm_accounts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "crm_opportunities" ADD CONSTRAINT "crm_opportunities_lead_id_crm_leads_id_fk" FOREIGN KEY ("lead_id") REFERENCES "public"."crm_leads"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "crm_opportunities" ADD CONSTRAINT "crm_opportunities_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "crm_cases" ADD CONSTRAINT "crm_cases_requester_id_users_id_fk" FOREIGN KEY ("requester_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "crm_cases" ADD CONSTRAINT "crm_cases_account_id_crm_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."crm_accounts"("id") ON DELETE no action ON UPDATE no action;