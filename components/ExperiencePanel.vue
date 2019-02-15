<template>
  <div>
    <h2 class="mb-3">
      Professional Experience
    </h2>
    <v-expansion-panel>
      <v-expansion-panel-content
        v-for="(item, i) in items"
        :key="i"
      >
        <div slot="header">
          <v-layout wrap row>
            <div>
              {{ item.company }}
            </div>
            <v-spacer />
            <div class="light-blue--text caption">
              {{ item.title }}
            </div>
          </v-layout>
        </div>
        <v-card>
          <v-card-text class="pa-2">
            <v-alert value="true" color="grey darken-4">
              <div>{{ item.desc }}</div>
              <br>
              <div>
                <span v-if="item.stack" class="light-blue--text">
                  Stack:
                </span> {{ item.stack }}
              </div>
            </v-alert>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          company: 'Facility for Rare IsotopeBeams (FRIB)',
          title: 'Junior Software Developer - Controls Team',
          desc:
            'Developed a web application used to manage and track the installation of accelerator devices or components. This application allows technical experts to ensure that each device is ready for operation.',
          stack: 'Node, Express, MongoDB, KnockoutJS, VuejS.'
        },
        {
          company: 'Self Employed',
          title: 'Freelance eCommerce Developer',
          desc:
            'Developed eCommerce stores, landing pages, and advertising funnels.',
          stack: 'Shopify, LimeLight, UltraCart, Ruby, Javascript, jQuery.'
        },
        {
          company: 'Labor Law Poster Service',
          title: 'Web and Software Developer',
          desc:
            'Developed an adminstration system to handle multiple tasks for the employees. Such tasks include: routing incoming calls to available employees, printing and sending invoices, recording orders, etc.',
          stack: 'CakePHP, Apache, Microsoft SQL Server'
        },
        {
          company: 'National Superconducting Cyclotron Laboratory (NSCL)',
          title: 'Student Labor Aassistant',
          desc: 'Developed a website front end for Control System Studio.',
          stack: 'HTML, CSS, Javascript, jQuery, AJAX, Github API'
        }
      ]
    }
  }
}
</script>
