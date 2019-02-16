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
            <v-flex :xs12="breakpoint.smAndDown">
              {{ item.company }}
            </v-flex>
            <v-spacer v-if="breakpoint.mdAndUp" />
            
            <div class="light-blue--text caption">
              {{ item.title }}
            </div>
          </v-layout>
        </div>
        <v-card>
          <v-card-text class="pa-2">
            <v-alert value="true" color="grey darken-4">
              <div v-for="(task, j) in item.tasks" :key="j">
                <v-divider v-if="j > 0" class="my-3" />
                <div>{{ task.desc }}</div>
                <br>
                <div>
                  <span v-if="task.stack" class="light-blue--text">
                    Stack:
                  </span> {{ task.stack }}
                </div>
              </div>
            </v-alert>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
import breakpoint from '@/mixins/breakpoint'
export default {
  mixins: [breakpoint],
  data() {
    return {
      items: [
        {
          company: 'Facility for Rare IsotopeBeams (FRIB)',
          title: 'Junior Software Developer - Controls Team',
          tasks: [
            {
              desc:
                'Developed a web application used to manage and track the installation of accelerator devices or components. This application allows technical experts to ensure that each device is ready for operation.',
              stack: 'Node, Express, MongoDB, KnockoutJS, VuejS.'
            }
          ]
        },
        {
          company: 'Self Employed',
          title: 'Freelance eCommerce Developer',
          tasks: [
            {
              desc:
                'Developed eCommerce stores, landing pages, and advertising funnels.',
              stack: 'Shopify, LimeLight, UltraCart, Ruby, Javascript, jQuery.'
            }
          ]
        },
        {
          company: 'Labor Law Poster Service',
          title: 'Web and Software Developer',
          tasks: [
            {
              desc:
                'Developed an adminstration system to handle multiple tasks for the employees. Such tasks include: routing incoming calls to available employees, printing and sending invoices, recording orders, etc.',
              stack: 'CakePHP, Apache, Microsoft SQL Server'
            },
            {
              desc:
                'Heavily influenced the projects structure by designing the new administration role functionality and database schema.'
            },
            {
              desc: 'Worked on an Instagram influencer system',
              stack: 'Ruby on the Rails'
            },
            {
              desc: 'Fixed bugs in the legacy adminstration system',
              stack: 'Cold Fusion'
            }
          ]
        },
        {
          company: 'National Superconducting Cyclotron Laboratory (NSCL)',
          title: 'Student Labor Aassistant',
          tasks: [
            {
              desc: 'Developed a website front end for Control System Studio.',
              stack: 'HTML, CSS, Javascript, jQuery, AJAX, Github API'
            },
            {
              desc:
                'Worked on the UI of the Olog service with jQuery, a log book used by developers at NSCL.',
              stack: 'jQuery'
            }
          ]
        }
      ]
    }
  }
}
</script>
