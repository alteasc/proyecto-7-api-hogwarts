const subjects = [
  {
    nombre: 'Historia de la Magia',
    profesor: 'Cuthbert Binns',
    libro: 'Bathilda Bagshot: Una historia de la magia',
    material: ['libro', 'pergamino', 'pluma'],
    optativa: false
  },
  {
    nombre: 'Pociones',
    profesor: 'Severus Snape',
    libro: 'Phyllida Spore: Mil hierbas mágicas y hongos',
    material: [
      'libro',
      'pergamino',
      'pluma',
      'varita',
      'caldero',
      'frasco',
      'balanza',
      'mortero',
      'ingredientes'
    ],
    optativa: false
  },
  {
    nombre: 'Adivinación',
    profesor: 'Sybill Trelawney',
    libro: 'Iñigo Imago: El oráculo de los sueños',
    material: ['libro', 'pergamino', 'pluma', 'bola de cristal', 'tarot'],
    optativa: true
  },
  {
    nombre: 'Defensa contra las artes oscuras',
    profesor: 'Dolores Umbridge',
    libro:
      'Ministerio británico de magia: Defensa contra las artes oscuras, Básico para principiantes',
    material: ['libro', 'pergamino', 'pluma'],
    optativa: false
  },
  {
    nombre: 'Cuidado de criaturas mágicas',
    profesor: 'Rubeus Hagrid',
    libro: 'Edwardus Lima: El monstruoso libro de los monstruos',
    material: ['libro', 'pergamino', 'pluma'],
    optativa: true
  }
]

module.exports = subjects
