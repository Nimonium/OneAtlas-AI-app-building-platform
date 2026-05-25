import { PrismaClient } from '@prisma/client'
import { templates } from '../data/templates'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding templates...')
  for (const t of templates) {
    await prisma.template.upsert({
      where: { slug: t.slug },
      update: {
        name: t.name,
        category: t.category,
        complexity: t.complexity,
        description: t.description,
        tags: t.tags,
        schemaDefaults: t.schemaDefaults as any,
      },
      create: {
        slug: t.slug,
        name: t.name,
        category: t.category,
        complexity: t.complexity,
        description: t.description,
        tags: t.tags,
        schemaDefaults: t.schemaDefaults as any,
      },
    })
  }
  console.log('Done seeding.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
