# Cities

**ID**
```xml
<record>
  <integer id="database_table_type" value="55"/>
  <large id="db_unique_id" value="4294967297"/>
  <unsigned id="property" value="1094992978"/>
  <record id="new_value">
    <integer id="database_table_type" value="2"/>
    <integer id="dcty" value="0"/>
    <large id="db_unique_id" value="2719019101312161558"/>
  </record>
  <integer id="version" value="2959"/>
  <integer id="db_random_id" value="653247416"/>
  <boolean id="is_client_field" value="true"/>
</record>
```

Note: increment `db_unique_id` where current value is `2719019101312161558`

**Name**
```xml
<record>
  <integer id="database_table_type" value="2"/>
  <large id="db_unique_id" value="2719019101312161558"/>
  <unsigned id="property" value="1131307373"/>
  <string id="new_value" value="Here comes the city name"/>
  <integer id="version" value="2959"/>
  <integer id="db_random_id" value="645748446"/>
  <string id="odvl" value=""/>
  <boolean id="is_client_field" value="true"/>
  <boolean id="is_language_field" value="true"/>
</record>
```

**Nation**
```xml
<record>
  <integer id="database_table_type" value="2"/>
  <large id="db_unique_id" value="2719019101312161558"/>
  <unsigned id="property" value="1131312233"/>
  <record id="new_value">
    <integer id="Nnat" value="773"/>
  </record>
  <integer id="version" value="2959"/>
  <integer id="db_random_id" value="155031678"/>
  <null id="odvl"/>
  <boolean id="is_client_field" value="true"/>
</record>
```

Note: `Nnat` must equal with nation Unique ID

**Nationality**
```xml
<record>
  <integer id="database_table_type" value="2"/>
  <large id="db_unique_id" value="2719019101312161558"/>
  <unsigned id="property" value="1131177833"/>
  <record id="new_value">
    <integer id="lang" value="14"/>
  </record>
  <integer id="version" value="2959"/>
  <integer id="db_random_id" value="599971810"/>
  <null id="odvl"/>
  <boolean id="is_client_field" value="true"/>
</record>
```

Note: `lang` must equal with nationality Unique ID

**Local Region**
```xml
<record>
  <integer id="database_table_type" value="2"/>
  <large id="db_unique_id" value="2719019101312161558"/>
  <unsigned id="property" value="1131180649"/>
  <record id="new_value">
    <integer id="lcrg" value="38003464"/>
  </record>
  <integer id="version" value="2959"/>
  <integer id="db_random_id" value="998736417"/>
  <null id="odvl"/>
  <boolean id="is_client_field" value="true"/>
</record>
```

Note: `lcrg` must equal with local region Unique ID

**Inhabitants Range**
```xml
<record>
  <integer id="database_table_type" value="2"/>
  <large id="db_unique_id" value="2719019101312161558"/>
  <unsigned id="property" value="1130983016"/>
  <integer id="new_value" value="2"/>
  <integer id="version" value="2959"/>
  <integer id="db_random_id" value="973131875"/>
  <integer id="odvl" value="1"/>
  <boolean id="is_client_field" value="true"/>
</record>
```

Values:
```
0   Not Set
1   0-1000
2   1001-2500
3   2501-5000
4   5001-10000
5   10001-25000
6   25001-50000
7   50001-100000
8   100001-250000
9   250001-500000
10  500001-1000000
11  1000001-2500000
12  2500001-5000000
13  5000001-10000000
14  10000001-20000000
15  20000001+
```

**Latitude**
```xml
<record>
  <integer id="database_table_type" value="2"/>
  <large id="db_unique_id" value="2719019101312161558"/>
  <unsigned id="property" value="1131176308"/>
  <float id="new_value" value="46.269390"/>
  <integer id="version" value="2959"/>
  <integer id="db_random_id" value="277933774"/>
  <float id="odvl" value="0.000000"/>
  <boolean id="is_client_field" value="true"/>
</record>
```

**Longitude**
```xml
<record>
  <integer id="database_table_type" value="2"/>
  <large id="db_unique_id" value="2719019101312161558"/>
  <unsigned id="property" value="1131179886"/>
  <float id="new_value" value="19.218399"/>
  <integer id="version" value="2959"/>
  <integer id="db_random_id" value="940040539"/>
  <float id="odvl" value="0.000000"/>
  <boolean id="is_client_field" value="true"/>
</record>
```

**Altitude**
```xml
<record>
  <integer id="database_table_type" value="2"/>
  <large id="db_unique_id" value="2719019101312161558"/>
  <unsigned id="property" value="1130458228"/>
  <integer id="new_value" value="137"/>
  <integer id="version" value="2959"/>
  <integer id="db_random_id" value="585024026"/>
  <integer id="odvl" value="0"/>
  <boolean id="is_client_field" value="true"/>
</record>
```