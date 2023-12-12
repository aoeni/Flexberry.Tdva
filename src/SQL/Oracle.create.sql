



CREATE TABLE "ПосадТалон"
(

	"primaryKey" RAW(16) NOT NULL,

	"Пассажир" RAW(16) NOT NULL,

	"Рейс" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Пассажир"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"КлассБилета" RAW(16) NOT NULL,

	"Коды" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Коды"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодБрони" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "КлассБилета"
(

	"primaryKey" RAW(16) NOT NULL,

	"Класс" NVARCHAR2(6) NULL,

	"Место" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Рейс"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Куда" NVARCHAR2(255) NULL,

	"ОтКуда" NVARCHAR2(255) NULL,

	"ВремяОтпр" NVARCHAR2(255) NULL,

	"НачПосад" NVARCHAR2(255) NULL,

	"КонецПосад" NVARCHAR2(255) NULL,

	"Выход" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ИнфБронь"
(

	"primaryKey" RAW(16) NOT NULL,

	"Пассажир" RAW(16) NOT NULL,

	"Рейс" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ПосадТалон"
	ADD CONSTRAINT "ПосадТалон_FП_6795" FOREIGN KEY ("Пассажир") REFERENCES "Пассажир" ("primaryKey");

CREATE INDEX "ПосадТалон_IПа_121" on "ПосадТалон" ("Пассажир");

ALTER TABLE "ПосадТалон"
	ADD CONSTRAINT "ПосадТалон_FР_9217" FOREIGN KEY ("Рейс") REFERENCES "Рейс" ("primaryKey");

CREATE INDEX "ПосадТалон_IРейс" on "ПосадТалон" ("Рейс");

ALTER TABLE "Пассажир"
	ADD CONSTRAINT "Пассажир_FКла_4224" FOREIGN KEY ("КлассБилета") REFERENCES "КлассБилета" ("primaryKey");

CREATE INDEX "Пассажир_IКла_9878" on "Пассажир" ("КлассБилета");

ALTER TABLE "Пассажир"
	ADD CONSTRAINT "Пассажир_FКоды_0" FOREIGN KEY ("Коды") REFERENCES "Коды" ("primaryKey");

CREATE INDEX "Пассажир_IКоды" on "Пассажир" ("Коды");

ALTER TABLE "ИнфБронь"
	ADD CONSTRAINT "ИнфБронь_FПас_5197" FOREIGN KEY ("Пассажир") REFERENCES "Пассажир" ("primaryKey");

CREATE INDEX "ИнфБронь_IПас_7901" on "ИнфБронь" ("Пассажир");

ALTER TABLE "ИнфБронь"
	ADD CONSTRAINT "ИнфБронь_FРейс_0" FOREIGN KEY ("Рейс") REFERENCES "Рейс" ("primaryKey");

CREATE INDEX "ИнфБронь_IРейс" on "ИнфБронь" ("Рейс");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


