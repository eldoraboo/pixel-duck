<Card boxShadow="lg" align="center">
  <CardBody>
    <Popover>
      <PopoverTrigger>
        <Button bg={color} m={1}></Button>
      </PopoverTrigger>
      <PopoverContent>
        <ChromePicker
          width="100%"
          color={color}
          onChange={(color) => setColor(color.hex)}
        />
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverTrigger>
        <Button bg={beakColor} m={1}></Button>
      </PopoverTrigger>
      <PopoverContent>
        <ChromePicker
          width="100%"
          color={beakColor}
          onChange={(beakColor) => setBeakColor(beakColor.hex)}
        />
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverTrigger>
        <Button bg={eyeColor} m={1}></Button>
      </PopoverTrigger>
      <PopoverContent>
        <ChromePicker
          width="100%"
          color={eyeColor}
          onChange={(eyeColor) => setEyeColor(eyeColor.hex)}
        />
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverTrigger>
        <Button bg={bgColor} m={1}></Button>
      </PopoverTrigger>
      <PopoverContent>
        <ChromePicker
          width="100%"
          color={bgColor}
          onChange={(bgColor) => setBgColor(bgColor.hex)}
        />
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverTrigger>
        <Button bg={hatColor} m={1}></Button>
      </PopoverTrigger>
      <PopoverContent>
        <ChromePicker
          width="100%"
          color={hatColor}
          onChange={(hatColor) => setHatColor(hatColor.hex)}
        />
      </PopoverContent>
    </Popover>
  </CardBody>
</Card>;
